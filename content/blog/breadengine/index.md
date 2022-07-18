---
title: Bread engine
date: "2022-07-15"
description: My custom C# terminal ui engine
---

Bread engine is an engin written in **C#** for the **dotnet** framework and allows you to create **tui** (Terminal ui)-s from a single text file. It defines the layout, you just have to listen to the events.

[Check out the source code on github](https://github.com/peterferencz/breadengine)

![Screenshot of Bread engine](./breadengine.png)


# Layout file
All the ui data is stored in a layout file with utf-8 encoding.

## :Layout
The layout defines how the screen should be split up into sections. They all have *one character identifiers*

#### Example
```
:LAYOUT
0 1 1 1 4 4
0 1 1 1 4 4
0 2 2 2 4 4
0 2 2 2 4 4
0 2 2 2 4 4
0 3 3 3 4 4
0 3 3 3 4 4
```

## :Nav
The navigation defines how the sections give focus after thy run out of components to focus.
It consists of *section identifiers* seperated by spaces.
#### Example
```
:NAV
0 1 2 3 4
```

## :Section
A colon followed by a *section identifier* defines the components of a section. They are parsed line-by-line.
### Available components
Components consist of names, id-s and parameters.
#### ID
Id-s are optional, and used for later referring to them in code.
They are appended after a component name with a hash(#) and before the parameter.
#### Parameters
Parameters supply additional information to the component. They are encapsulated by parentheses.
#### Example component
```
NAME#ID(ARGUMENTS)
```


### Spacer
just a horizontal line
```
SPACER
SPACER(-=-)
```
### Text
```
TEXT(HELLO WORLD)
```
### Button
```
BUTTON(Click me!)
```
### Loader
```
LOADER
```
### Slider
```
SLIDER
```
### TextBox
```
TEXTBOX
TEXTBOX(Editable text)
```
### Title
Title is a special component, because it doesn't get drawn inside the section, but rather at the top of it
```
TITLE(I'm a title)
```



# Putting it all togeather
```
:LAYOUT
0 1 1 1 4 4
0 1 1 1 4 4
0 2 2 2 4 4
0 2 2 2 4 4
0 2 2 2 4 4
0 3 3 3 4 4
0 3 3 3 4 4

:NAV
0 1 2 3 4

:0
SPACER(=)
TEXT(This is an app created with BreadEngine)
SPACER(=)
SPACER
BUTTON(test button1)
BUTTON(test button2)
TEXT(This engine makes it super easy to create terminal ui-s. You Just simply define the layout in the .Layout file)
BUTTON#test(Start creating awesome apps with BreadEngine)

:1
TITLE(Layout)
TEXT(You start the layout with :LAYOUT)
TEXT(After that, you define sections as single characters)
TEXT(0 0 2 2)
TEXT(0 0 2 2)
TEXT(0 0 2 2)
TEXT(1 1 1 1)

:2
TEXT(After that you can define components for the predefined sections)
TEXT(Examples)
TEXT(:1)
TEXT(TEXT(Some text))
TEXT(BUTTON(Text of the button))

:3
TITLE(Result)
TEXT(Some text)
BUTTON(Text of the button)

:4
TITLE(List of components)
TEXT(Text:)
TEXT(Lorem Ipsum dolor sit amet.)
SPACER
SPACER
TEXT(Button:)
BUTTON(Lorem Ipsum dolor sit amet.)
SPACER
SPACER
TEXT(Spacer:)
SPACER(-=-)
SPACER
SPACER
TEXT(Loader:)
LOADER
SPACER
TEXT(Slider:)
SLIDER
SPACER
TEXT(TextBox:)
TEXTBOX
```