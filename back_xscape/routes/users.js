import User from "../models/users.js";

const userRoutes = (app) => {
  app.get("/users", async (req, res) => {
    const users = await User.find({});
    res.json({ status: 200, users: users });
  });

  app.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.find({ _id: id });
    res.json({ status: 200, users: user });
  });

  app.post("/users/add", async (req, res) => {
    const user= new User({
      ...req.body,
      creationDate: new Date(),
    });
    user 
      .save()
      .then((data)=>{
        res.status(200).json(data)
      })
      .catch((err) => {
        res.status(400).json({err})
      })
    })

  // app.put("/users/update/:id", async (req, res) => {
  //   const id = req.params.id;
  //   const data = {
  //     name: req.body.name,
  //     description: req.body.description,
  //     price: req.body.price,
  //     category: req.body.category,
  //   };
  //   const result = await User.updateOne({ _id: id }, data);
  //   res.json({ status: 200, result: result });
  // });

  // app.delete("/users/delete/:id", async (req, res) => {
  //   const id = req.params.id;
  //   const result = await User.deleteOne({ _id: id });
  //   res.json({ status: 200, result: result });
  // });

  // app.get("/categories/:category/users", async (req, res) => {
  //   const category = req.params.category;
  //   const result = await User.find({ category: category });
  //   res.json({ status: 200, result: result });
  // });
};

export default userRoutes;