"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlogs = exports.viewBlogs = void 0;
const database_1 = require("../database");
const viewBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogInfo = yield database_1.pool.query("SELECT * FROM tbl_blog");
        return res.status(200).json(blogInfo.rows);
    }
    catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
});
exports.viewBlogs = viewBlogs;
const createBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { blogId, blogTitle, blogDesc, blogImageName, blogTagName } = req.body;
        const addBlog = yield database_1.pool.query("INSERT INTO tbl_blog (blog_id,blog_title,blog_desc,blog_image_file_name, blog_tag_name) VALUES ($1,$2,$3,$4,$5)", [blogId, blogTitle, blogDesc, blogImageName, blogTagName]);
        return res.status(200).json({ message: "user created successfully", body: { BlogInfo: { blogId, blogTitle, blogDesc, blogImageName, blogTagName } } });
    }
    catch (error) {
        return res.status(500).json("Server Error");
    }
});
exports.createBlogs = createBlogs;
// export const createUser = async (req:Request,res:Response):Promise<Response> => {
//     try {
//         const {userName,userEmail} = req.body;
//         const addUser:QueryResult = await pool.query("INSERT INTO tbl_user (user_name,user_email_id) VALUES ($1,$2)",[userName,userEmail])
//     return res.status(200).json({message:"user created successfully", body:{user:{userName,userEmail}}});
//     } catch (error) {
//         return res.status(500).json("Server Error")
//     }
// }
// export const deleteUser = async (req:Request,res:Response):Promise<Response> => {
//     try {
//         // console.log(req.params.userId)
//         // res.send("deleting")
//         const {userId} =req.body  ;
//         // const {userId} = req.body;
//         const removeUser:QueryResult = await pool.query("DELETE FROM tbl_user WHERE user_id=$1",[userId])
//     return res.status(200).json({message:`user ${userId} deleted successfully`});
//     } catch (error) {
//         return res.status(500).json("Server Error")
//     }
// }
// export const updateUser = async(req:Request,res:Response):Promise<Response> => {
//     try {
//         // const id = parseInt(req.params.userId);
//         const {userId,userName,userEmail} = req.body;
//         console.log(userId);
//         console.log(userName);
//         console.log(userEmail);
//         const userUpdate:QueryResult = await pool.query("UPDATE tbl_user SET user_name=$1, user_email_id=$2 WHERE user_id=$3",[userName,userEmail,userId]);
//         return res.status(200).json({message:`user ${userId} updated successfully`});
//     } catch (error) {
//         return res.status(500).json("Server Error")
//     }
// }
