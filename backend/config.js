export default {
    MONGODB_URL : process.env.MONGODB_URL || " mongodb://localhost/CresDatabase",
    JWT_SECRET:process.env.JWT_SECRET || "somethingsecret"
}