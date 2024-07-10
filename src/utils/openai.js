import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: import.meta.env.REACT_APP_OPENAI_KEY
})


export default openai