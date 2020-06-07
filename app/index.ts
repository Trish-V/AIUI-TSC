#!/usr/bin/env node
import { Hero } from "./hero/hero"
import { MainDart } from "./template/main.dart"

const packageJson = require('../package.json');


var fs = require('fs'),
    path = require('path')
var sys = require('util')
const colors = require('colors')
var readline = require('readline')
var _ = require('lodash')
var hero = require('./hero/hero.js')
const { spawn } = require('child_process')
var exec = require('child_process').exec
var Spinner = require('cli-spinner').Spinner
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


class Main {
    appName: any;
    packageName: any;
    spinner: any;
    templateUrl: any;

    constructor() {
        new Hero();

        let main = async () => {
            await this.question1().then(res => {

            })
            await this.question2().then(res => {

            })
            await this.question3().then(res => {

            })

            this.spinner = new Spinner(colors.bold(colors.green('processing.. %s  ')))

            this.spinner.setSpinnerString(15)
            this.spinner.setSpinnerDelay(200)
            // this.spinner.setSpinnerString('|/-\\')
            this.spinner.start();

            await this.executeCMD(this.appName, this.packageName)
            this.rl.close()
        }
        main();


    }

    async readJson() {
        fs.readFile(this.templateUrl, 'utf8', (err: { code: string; }, data: any) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.error('file does not exist');
                    return;
                }

                throw err;
            }
            console.log(data)
            let content = JSON.parse(data)
            let mainDart = new MainDart();
            mainDart.theme = content[0].page_1.theme.primarySwatch
            mainDart.appName=this.appName;
            let context = this
            let currentPath = path.dirname(fs.realpathSync(__filename)); 
            fs.writeFileSync( /*currentPath + */'./' + this.appName + '/lib/main.dart', mainDart.getPage())

        });

    }

    async executeCMD(appName: String, packageName: String) {
        let context = this
        let currentPath = path.dirname(fs.realpathSync(__filename));
        exec("flutter create --org " + packageName + "  ./" + appName, function (error: string | null, stdout: string, stderr: string) {
          
            console.log('\n' + stdout);
            context.spinner.stop(true)


            context.readJson()

            if (error !== null) {
                console.log('exec error: ' + error)
            }
        });

    }
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    question1 = () => {
        return new Promise((resolve, reject) => {
            this.rl.question(colors.yellow('App name : '), (answer: String) => {
                this.appName = answer
                resolve()
            })
        })
    }

    question2 = () => {
        return new Promise((resolve, reject) => {
            this.rl.question(colors.yellow('Package name : '), (answer: String) => {
                this.packageName = answer
                resolve()
            })
        })
    }
    question3 = () => {
        return new Promise((resolve, reject) => {
            this.rl.question(colors.yellow('Specify the template url : '), (answer: String) => {
                this.templateUrl = answer
                resolve()
            })
        })
    }


}

new Main();