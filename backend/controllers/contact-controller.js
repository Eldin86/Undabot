const { validationResult } = require('express-validator')

const contactUs = (req, res, next) => {

    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        const errorMsg = {}
        validationErrors.errors.map(e => {
            errorMsg[e.param] = e.msg
        })
        res.status(422).json({...errorMsg})
        return
    }else if(validationErrors.isEmpty()){
        res.status(200).json({ isSuccessMessage: "Your message has been sent!" })
        return
    }
    res.status(500).json({ isSuccessMessage: "Something went wrong, please try later again!" })
    return
}

exports.contactUs = contactUs