export class MainDart{
    theme: String = '';
    s: String ='';
    appName: any;


    constructor() {
        // this.theme = ''

    }


    getPage() {

        this.s = "import 'package:flutter/material.dart';\n" +
            "\n" +
            "void main() => runApp(MyApp());\n" +
            "\n" +
            "class MyApp extends StatelessWidget {\n" +
            "  // This widget is the root of your application.\n" +
            "  @override\n" +
            "  Widget build(BuildContext context) {\n" +
            "    return MaterialApp(\n" +
            "      title: '"+String(this.appName)[0].toUpperCase()+String(this.appName).slice(1)+" Application',\n" +
            "      theme: ThemeData(\n" +
            "        // is not restarted.\n" +
            "        primarySwatch: " + String(this.theme) + ",\n" +
            "      ),\n" +
            "      home: MyHomePage(title: '"+String(this.appName)[0].toUpperCase()+String(this.appName).slice(1)+ " Home Page'),\n" +
            "    );\n" +
            "  }\n" +
            "}\n" +
            "\n" +
            "class MyHomePage extends StatefulWidget {\n" +
            "  MyHomePage({Key key, this.title}) : super(key: key);\n" +
            "  // always marked \"final\".\n" +
            "\n" +
            "  final String title;\n" +
            "\n" +
            "  @override\n" +
            "  _MyHomePageState createState() => _MyHomePageState();\n" +
            "}\n" +
            "\n" +
            "class _MyHomePageState extends State<MyHomePage> {\n" +
            "  int _counter = 0;\n" +
            "\n" +
            "  void _incrementCounter() {\n" +
            "\n" +
            "  }\n" +
            "\n" +
            "  @override\n" +
            "  Widget build(BuildContext context) {\n" +
            "    return Scaffold(\n" +
            "      appBar: AppBar(\n" +
            "        title: Text(widget.title),\n" +
            "      ),\n" +
            "    );\n" +
            "  }\n" +
            "}\n";

        
        return this.s;
    }
}