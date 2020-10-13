module.exports = class SaludoArgs {
    static get nombre() {
        return process.argv[2];
    }
}