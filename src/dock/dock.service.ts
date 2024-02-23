import { Injectable } from '@nestjs/common';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class DockService {

    createDock(input_name: string) {
        const content = fs.readFileSync(path.resolve(__dirname, 'input.docx'), 'binary');
        console.log(input_name)
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });
        doc.render({
            name: input_name,
        });
        const buf = doc.getZip().generate({
            type: "nodebuffer",
            compression: "DEFLATE",
        });
        try{
            fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
        } catch (error) {
            console.log(error);
        }
    }

}
