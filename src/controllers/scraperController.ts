import { Request, Response, NextFunction } from 'express';
import superagent = require('superagent');
import { parse } from 'node-html-parser';

export async function scrapeUrl(req: Request, res: Response, next: NextFunction): Promise<void> {
    const url = req.params.url;
    const elementId = req.params.elementId;
    console.log('scrapeUrl:', url);
    console.log('find id:', elementId);
    let html = null;
    try {
        html = (await superagent.get(url)).text;
    } catch (error) {
        res.status(400).send({error: "Url could not be loaded"});
    }
    if (html) {
        const root = parse(html);
        const foundContent = root.querySelector('#' + elementId);
        if (foundContent) {
            const rawText = foundContent.rawText;
            console.log('rawText:', rawText);
            if (rawText.length === 0) {
                res.status(400).send({error: "Element ID found but no content to proof"});
            } else {
                res.status(200).send({content: rawText});
            }
        } else {
            res.status(400).send({error: "Element ID could not be found"});
        }
    }
}
