const bcrypt = require("bcrypt");

const testfunc = async (pass, hash) => {
    const test = await bcrypt.compare(pass, hash).then(test);
}

const res = testfunc('testpass123456', '$2b$10$1rGwT3HUm06eE0CZ0eARIOoB040LKwqJSpIVK.PJmaSnsvjLHYM/6');


console.log(res);