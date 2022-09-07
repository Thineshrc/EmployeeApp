var fs = require('fs');

const csvFilePath ='./FCT-EMP-LIST.csv'
const csv=require('csvtojson')




module.exports = {
    getemployee: async function(callback){
        const jsonArray = await csv().fromFile(csvFilePath);

        return callback(null, jsonArray);

    },
    getemployeebyId: async function(id, callback){
        const jsonArray = await csv().fromFile(csvFilePath);

        if(jsonArray?.[id]) {
            return callback(null, jsonArray[id]);
        }
        else {
            return callback(new Error('No Ids Available'), {});
        }
    },
    deleteById: async function(id,callback){

        const jsonArray = await csv().fromFile(csvFilePath);

        const { Parser } = require('json2csv');

        const fields = ['Employee name', 'Email', 'Date of join', 'Password'];
        const opts = { fields };

        try {
            if(jsonArray?.[id]) {
                delete jsonArray[id];
            }
            else {
                return callback(new Error('No Ids Available'), {});
            }
            const parser = new Parser(opts);
            const csv = parser.parse(jsonArray);

            fs.writeFileSync(csvFilePath, csv);
            return callback(null, {});
            console.log(csv);
        } catch (err) {
            return callback(new Error('No Ids Available'), {});
            console.error(err);
        }

    },
    updateById: async function(id,updateVal,callback){

        const jsonArray = await csv().fromFile(csvFilePath);

        const { Parser } = require('json2csv');

        const fields = ['Employee name', 'Email', 'Date of join', 'Password'];
        const opts = { fields };

        try {
            if(jsonArray?.[id]) {
                jsonArray[id] = {
                    ...jsonArray[id],
                    ...updateVal
                }
            }
            else {
                return callback(new Error('No Ids Available'), {});
            }
            const parser = new Parser(opts);
            const csv = parser.parse(jsonArray);

            fs.writeFileSync(csvFilePath, csv);
            return callback(null, {});
            console.log(csv);
        } catch (err) {
            return callback(new Error('No Ids Available'), {});
            console.error(err);
        }

    },
}