import jwt from 'jsonwebtoken';

const secret = 'MdSchollAdmin';
const expiration = '2h';

const signToken = function({ username }) {
    const payload = { username };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

export default signToken;