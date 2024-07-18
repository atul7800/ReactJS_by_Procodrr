/*++++++++++++++Create React element without using React library+++++++++++++++*/
/*
const root = document.getElementById('root')

const a = {
    type:'a',
    props:{
        href:'https://www.w3schools.com/jsref/met_element_setattribute.asp',
        target:'_blank'
    },
    child:'<p>I am w3schools</p>'
}

const element = document.createElement(a.type);
element.innerHTML = a.child;
for(prop in a.props){
    element.setAttribute(prop, a.props[prop]);
}
root.appendChild(element)
*/


/*++++++++++++++Create React element using React library+++++++++++++++*/

//const a = React.createElement('a', {href:'https://www.w3schools.com/jsref/met_element_setattribute.asp', target:'_blank'}, 'I am w3schools')
/*const a = {
    $$typeof: Symbol.for('react.element'),
    type: 'a',
    ref: null,
    props: {
        href: 'https://www.w3schools.com/jsref/met_element_setattribute.asp',
        target: '_blank',
        children: 'I am w3schools'
    },
}*/

const div = React.createElement('div', {className:'parent-class'}, [
    React.createElement('p', {}, [
        React.createElement('span', {}, 'span1'),
        React.createElement('span', {}, 'span2')
    ])
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);


