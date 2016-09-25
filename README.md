# material-accordion
An angular material directive to creat an accordion out of an Angular Material `md-list` component

This directive transforms a normal md-list into an accordion menu as follow:

lets try to create the following menu:

**first element**(on click we display the text bellow)
 Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam.

```html
 <md-list one class="md-accordion">
        <md-accordion-item>
            <md-list-item class="md-accordion-item-header item-open">
                <h2>First element</h2>
            </md-list-item>
            <md-list-item class="md-accordion-item-body">
                <p>Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. .</p>      
            </md-list-item>
            <md-divider></md-divider>
        </md-accordion-item>
```

#### md-accordion
this class defines the bounderies of the accordion and it is to be added to the `md-list` that we want to transform into an accordion list.

#### md-accordion-item
this tag is to be used to define the limits of an item of the accordion 


An accordion Item is composed of a **header** and **body**

both the header and the body are `md-list-item` elements

#### one 
this attribute is to be used in the mn-list element if the user wants to only allow for one open item at a time.

#### item-open
by default all the items are closed if you want to specify an item to be open by difault when the list is loaded use the `item-open` class on the md-accordion-item-body element you want to have open in the begining.
