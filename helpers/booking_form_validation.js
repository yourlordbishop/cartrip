import * as yup from "yup";

export const rules = yup.object().shape({
    duration: yup.number().required().min(1),
    phone: yup.string().required().min(11),
    address: yup.string().required(),
    comments: yup.string()
})