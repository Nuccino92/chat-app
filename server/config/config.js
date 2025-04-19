require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: "MYSQL_PUBLIC_URL",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
  test: {
    use_env_variable: "MYSQL_PUBLIC_URL",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    use_env_variable: "MYSQL_PUBLIC_URL",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
