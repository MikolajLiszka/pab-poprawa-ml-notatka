import express from 'express'
import {Request, Response} from 'express'
import mongoose from "mongoose";
import { title } from 'process';
import { json } from 'stream/consumers';
import { Note } from '../Models/Note';
import { Tag } from '../Models/Tag';

export class TagActions {
    async getAllTags(req: Request, res: Response) {
        const tag = await Tag.find()
        console.log(tag);
        return res.status(200).json(tag);
    }

    async getTag(req: Request, res: Response) {
        const id = req.params.id;

        const tag = await Tag.findOne({ _id:id });

        res.status(200).json(tag);
    }

    async saveTag(req: Request, res: Response) {

        const id = req.params.id
        const name = req.body.name;

        const newTag = new Tag ({
            name: name,
        })

        await newTag.save();

        res.status(200).json(newTag);
    }

    async updateTag(req: Request, res: Response) {
        const id = req.params.id;
        const name = req.body.name;

        const tag = await Tag.findOne({ _id: id});

        if(tag) {
            tag.name = name;
            await tag.save();
            res.status(201).json(tag)
        }
    }

    async deleteTag(req: Request, res: Response) {
        const id = req.params.id;
        await Tag.deleteOne({ _id : id });

        res.sendStatus(204);
    }
}

module.exports = new TagActions();