import  Url  from "../models/url.model.js";
import {isUrl} from 'check-valid-url'
import dotenv from "dotenv"
dotenv.config();
const baseUrl = process.env.BASE_URL;



export const shorturl = async (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl || !longUrl.startsWith('http')||!isUrl(longUrl)) {
        return res.status(400).json({ error: 'Invalid URL provided.' });
    }

    try {
        let url = await Url.findOne({ longUrl });

        if (url) {
            return res.json({ shortUrl:`${baseUrl}/${url.shortCode}` });
        } else {
            const newUrl = new Url({ longUrl });
            await newUrl.save();
            return res.status(201).json({ shortUrl:`${baseUrl}/${newUrl.shortCode}` });
        }
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Server error. Please try again.' });
    }
};


export const  visit = async (req, res) => {
    try {
        
        
        const url = await Url.findOne({ shortCode: req.params.shortCode});
         console.log(url);
        if (url) {
            url.visited+=1;
            await url.save();
            return res.status(200).json({redirect:url.longUrl});
        } else {
            return res.status(404).json({ error: 'No URL found for this short code.' });
        }
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Server error.' });
    }
};
export const visitall = async(req,res)=>{
    try{
        // console.log(Url.find({}))
       let allurl= await Url.find({});
       
       
       
       res.status(200).json({allurl});
    }
    catch(err){
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Server error.' });
    }
}
