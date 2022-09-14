import express from 'express'
import {Request, Response} from 'express'
import mongoose from "mongoose";
import { title } from 'process';
import { json } from 'stream/consumers';
import { Note } from '../Models/Note';

export class NoteActions {
    async getAllNotes(req: Request, res: Response) {
        const note = await Note.find().populate("tags")
        console.log(note);
        return res.status(200).json(note);
    }

    async getNote(req: Request, res: Response) {
        const id = req.params.id;

        const note = await Note.findOne({ _id:id });

        res.status(200).json(note);
    }

    async saveNote(req: Request, res: Response) {

        const id = req.params.id
        const title = req.body.title;
        const content = req.body.content;
        const createDate = req.body.createDate;
        const tags = req.body.tags;

        const newNote = new Note ({
            title: title,
            content: content,
            createDate: createDate,
            tags: tags
        })

        await newNote.save();

        const notesById = Note.updateOne({_id: newNote?.tags},{$set:{order: newNote.id}});

        res.status(200).json(newNote);
    }

    async updateNote(req: Request, res: Response) {
        const id = req.params.id;
        const content = req.body.content;
        const createDate = req.body.createDate;
        const tags = req.body.tags;

        const note = await Note.findOne({ _id: id});

        if(note) {
            note.title = title;
            note.content = content;
            note.createDate = createDate;
            note.tags = tags;
            await note.save();
            res.status(201).json(note)
        }
    }

    async deleteNote(req: Request, res: Response) {
        const id = req.params.id;
        await Note.deleteOne({ _id : id });

        res.sendStatus(204);
    }
}

module.exports = new NoteActions();