const express = require('express');
const app = express();
const bodyparser = require('body-parser')

app.use(bodyparser.json());

const getJSON = {
    operation_code: 1
}

const welcome = {
    data: "Welcome to Bajay Finserv (test)"
}



app.post('/bfhl', (req, res) => {


    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: 'data not found' });
        }


        const user_id = "anirudh_adithya_13012002";
        const email = "as4756@srmist.edu.in";
        const roll_number = "RA2011008020118";
        let numbers = [];
        let alphabets = [];
        let highest_alphabet = [];

        for (const item of data) {
            if (!isNaN(item)) {
                numbers.push(item);
            } else if (typeof item === 'string' && /^[A-Za-z]$/.test(item)) {
                alphabets.push(item);
                if (highest_alphabet.length === 0) {
                    highest_alphabet.push(item);
                } else if (item > highest_alphabet[0]) {
                    highest_alphabet = [item];
                } else if (item === highest_alphabet[0]) {
                    highest_alphabet.push(item);
                }
            }
        }


        const response = {
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet,
        };

        res.status(200).json(response);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ is_success: false, error: 'Bad Request' });
    }

});





app.get("/bfhl", (req, res) => {
    res.send(getJSON);
})

app.get("/bfhl", (req, res) => {
    res.send(welcome.data);
})

app.listen(3000)