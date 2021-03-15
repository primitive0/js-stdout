const stdout = {
    write(data) {
        process.stdout.write(data);
    },

    writeln(data) {
        process.stdout.write(data);
        process.stdout.write('\n');
    }
};

const stderr = {
    write(data) {
        process.stderr.write(data);
    },

    writeln(data) {
        process.stderr.write(data);
        process.stderr.write('\n');
    }
};

const colors = {
    RESET: '\x1B[0m',

    bg: {
        custom_color(color) {
            return `\x1B[48;5;${color}m`;
        }
    },

    custom_color(color) {
        return `\x1B[38;5;${color}m`;
    }
};


module.exports = { stdout, stderr, colors };
