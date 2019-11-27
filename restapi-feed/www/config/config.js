"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cfg = {
    "dev": {
        "postgress": {
            "username": process.env.DB_USERNAME,
            "password": process.env.DB_PASSWORD,
            "database": process.env.DB_DATABASE,
            "host": process.env.DB_HOST,
            "dialect": process.env.DB_DIALECT
        },
        "aws": {
            "aws_region": process.env.AWS_REGION,
            "aws_profile": process.env.AWS_PROFILE,
            "aws_media_bucket": process.env.AWS_S3_BUCKET
        },
        "jwt": {
            "secret": process.env.JWT_SECRET
        }
    },
    "prod": {
        "postgress": {
            "username": process.env.DB_USERNAME,
            "password": process.env.DB_PASSWORD,
            "database": process.env.DB_DATABASE,
            "host": process.env.DB_HOST,
            "dialect": process.env.DB_DIALECT
        },
        "aws": {
            "aws_region": process.env.AWS_REGION,
            "aws_profile": process.env.AWS_PROFILE,
            "aws_media_bucket": process.env.AWS_S3_BUCKET
        },
        "jwt": {
            "secret": process.env.JWT_SECRET
        }
    }
};
exports.config = cfg[process.env.ENV];
//# sourceMappingURL=config.js.map