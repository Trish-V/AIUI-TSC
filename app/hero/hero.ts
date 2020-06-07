
// declare var colors: any;
  
export class Hero {
      colors = require('colors');

    constructor() {
        this.line()
        this.starsLine() 
        this.line()
    }
    hero2 = [

        '               AAA               IIIIIIIIIIUUUUUUUU     UUUUUUUUIIIIIIIIII ®',
        '              A:::A              I::::::::IU::::::U     U::::::UI::::::::I',
        '             A:::::A             I::::::::IU::::::U     U::::::UI::::::::I',
        '            A:::::::A            II::::::IIUU:::::U     U:::::UUII::::::II',
        '           A:::::::::A             I::::I   U:::::U     U:::::U   I::::I  ',
        '          A:::::A:::::A            I::::I   U:::::D     D:::::U   I::::I  ',
        '         A:::::A A:::::A           I::::I   U:::::D     D:::::U   I::::I  ',
        '        A:::::A   A:::::A          I::::I   U:::::D     D:::::U   I::::I  ',
        '       A:::::A     A:::::A         I::::I   U:::::D     D:::::U   I::::I  ',
        '      A:::::AAAAAAAAA:::::A        I::::I   U:::::D     D:::::U   I::::I  ',
        '     A:::::::::::::::::::::A       I::::I   U:::::D     D:::::U   I::::I  ',
        '    A:::::AAAAAAAAAAAAA:::::A      I::::I   U::::::U   U::::::U   I::::I  ',
        '   A:::::A             A:::::A   II::::::II U:::::::UUU:::::::U II::::::II',
        '  A:::::A               A:::::A  I::::::::I  UU:::::::::::::UU  I::::::::I',
        ' A:::::A                 A:::::A I::::::::I    UU:::::::::UU    I::::::::I',
        'AAAAAAA                   AAAAAAAIIIIIIIIII      UUUUUUUUU      IIIIIIIIII   '
    ];


    starsLine() {
        for (var i = 0; i < this.hero2.length; i++)
            console.log('   ' + this.colors.bold(this.colors.red(this.hero2[i])))
    }

    line() {
        console.log(this.colors.green('\n_____________________________________________________________________________________'))
        console.log(this.colors.green('_____________________________________________________________________________________\n'))
    }
}