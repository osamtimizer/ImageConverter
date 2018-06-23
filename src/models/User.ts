import mongoose = require('mongoose');
import IUserDocument from '../interfaces/IUserDocument';
import crypto = require('crypto');
import bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: { unique: true },
        minlength: 4,
        maxlength: 255,
    },
    email: {
        type: String,
        required: true,
        index: { unique: true },
        minlength: 4,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255
    },
    salt: {
        type: String,
        required: true,
        max: 255
    },
    title: {
        type: String,
        maxlength: 255
    },
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    middleName: {
        type: String,
        maxlength: 255
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
});

userSchema.pre('save', async function (next) {
    if (isUserDocument(this)) {
        const salt = await bcrypt.genSalt(10);
        this.salt = salt;
        const hash = await bcrypt.hash(this.password, salt);
        const isSame = await bcrypt.compare(this.password, hash);
        if (isSame) {
            this.password = hash;
            next();
        } else {
            next(new Error('invalid password and hash'));
        }
    } else {
        next(new Error('invalid usermodel.'));
    }
});

const isUserDocument = (item: any): item is IUserDocument => {
    return item.type === 'Document' && item.userId !== undefined;
}

const User = mongoose.model("User", userSchema);

export default User