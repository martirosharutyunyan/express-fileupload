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
const graphql_1 = require("graphql");
const graphql_upload_1 = require("graphql-upload");
const schema = new graphql_1.GraphQLSchema({
    mutation: new graphql_1.GraphQLObjectType({
        name: 'Mutation',
        fields: {
            uploadImage: {
                description: 'Uploads an image.',
                type: graphql_1.GraphQLBoolean,
                args: {
                    image: {
                        description: 'Image file.',
                        type: graphql_upload_1.GraphQLUpload,
                    },
                },
                resolve(parent, { image }) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const { filename, mimetype, createReadStream } = yield image;
                        const stream = createReadStream();
                        // Promisify the stream and store the file, then…
                        return true;
                    });
                },
            },
        },
    }),
});
//# sourceMappingURL=schema.js.map