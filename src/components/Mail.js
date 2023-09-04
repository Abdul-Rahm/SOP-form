import { Mail } from ".";
import { mailOptions, transporter } from "./Nodemailer";

const INPUT_FIELDS =  {
    name: "Name",
    email: "Email",
    age: "Date of Birth",
    education: "Academic Qualifications",
    institute: "Institution of Your Highest Degree",
    study: "What Was Your Major/Area of Study?",
    experience: "Work Experience",
    canada_study: "Which educational institution in Canada offered you admission?",
    canada_area: "In which area are you pursuing your studies in Canada",
    country:"Which Country do you belong to?",
    goals:"What are your career aspirations?",
    listening_scores: "Your English Listening Score",
    speaking_scores: "Your English Speaking Score",
    reading_scores: "Your English Reading Score",
    writing_scores: "Your English Writing Score",
    payment: "Did you make the first-year tuition payment?",
    GIC:"Have you invested in a GIC?",
    fee:"What was the tuition fee payment amount?",
    amount: "What was your investment amount in the GIC?",

}


const generteEmailContent = (data) => {
    const stringData = Object.entries(data).reduce(
        (str, [key, val]) => 
          (str += `${INPUT_FIELDS[key]}: \n${val}} \n \n`),
        ""  
    );

    return {
        text: stringData,
    };
}

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.email) {
            return res.status(400)
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                ...generteEmailContent(data),
                subject: data.subject,
            });

            return res.status(200)
        }   catch(error) {
            console.log(error);
        }
    }
}
export default Mail