const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'your project name',
                default: this.appname
            }
        ])
        .then( answers => {
            this.answers = answers
        })
    }

    writing () {
        //把每一个文件都通过模版转换到目标路径

        const templates = [
            'public/favicon.ico',
            'public/index.html',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/router/index.ts',
            'src/store/index.ts',
            'src/views/About.vue',
            'src/views/Home.vue',
            'src/App.vue',
            'src/main.ts',
            'src/shims-tsx.d.ts',
            'src/shims-vue.d.ts',
            'package.json',
            'README.md',
            'tsconfig.json',
            'yarn.lock'

        ]

        templates.forEach(item => {
            // item每一个文件路径
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}