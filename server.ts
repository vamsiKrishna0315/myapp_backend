import APP from './app';
import SEQUELIZE from  './src/config/database'

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await SEQUELIZE.authenticate();
        console.log('Database Connected');

        APP.listen(PORT, () => {
            console.log(`SERVER running on ${PORT}`)
        })
    } catch (error) {
        console.log('Unable to connect to the database:', error)
    }
}

startServer();