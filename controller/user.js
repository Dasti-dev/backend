const filePath = 'controller/user.json'; // Make sure this path is correct

const fs = require('fs');
const jwt = require('jsonwebtoken');

async function signUp(req, res) {
    const name = req.body.name;
    const password = req.body.password;
    let newData = { "name": name, "password": password };

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            let existingData = JSON.parse(data);
            

            // Append your new JSON data
            existingData.push(newData);
            
            // existingData.append(newData);

            // Write the updated object back to the JSON file
            fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                console.log('Data appended to the file successfully.');
                return res.status(200).json({ msg: "signed up" });
            });
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}

async function logIn(req, res) {
    const { name, password } = req.body;
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            const users = JSON.parse(data);

            // Check if the user with the given name and password exists
            const userExists = users.some(user => user.name === name && user.password === password);

            if (userExists) {
                return res.status(200).send('Logged In');
            } else {
                return res.status(404).send('Not Found');
            }
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}

module.exports = {
    signUp,
    logIn,
}
