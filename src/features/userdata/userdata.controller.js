import userdataRepository from "./userdata.repository.js";

export default class userdataController {
  constructor() {
    this.userdataRepository = new userdataRepository();
  }

  async getUserDatas(req, res) {
    try {
      const { userId } = req.body;
      const userdatas = await this.userdataRepository.getOne(userId);
      res.status(200).send(userdatas);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  }

  async manageuserdata(req, res) {
    try {
      const {
        shopname,
        address,
        gstnumber,
        userId,
        
      } = req.body;

      if (!userId) {
        return res.status(400).send("userId is required");
      }

      const userdataData = {
        shopname: shopname || "",
        address: address || "",
        gstnumber: gstnumber || "",
        userId: userId,
        
      };

      const createduserdata = await this.userdataRepository.manageUserData(
        userdataData
      );
      res.status(201).send(createduserdata);
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  }

  async delete(req, res, next) {
    try {
      const userId = req.params.id;
      const deleteduserdata = await this.userdataRepository.delete(userId);
      res.status(200).send(deleteduserdata);
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  }
}
