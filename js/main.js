const createStudentComponent = (student) => {
  const addComponent = function (tag, content, parent) {
      const element = document.createElement(tag)
      element.textContent = content
      parent.appendChild(element)
      return element
    },
    container = document.querySelector('#container'),
    div = addComponent('div', '', container),
    h2 = addComponent('h2', student.name, div),
    section = addComponent('section', student.subject, div),
    aside = addComponent('aside', student.info, div);





  if (student.score >= 60) {
    h2.classList.add('xx-large', 'passing')
    section.classList.add('bordered', 'dashed', 'section--padded')
    aside.classList.add('pushRight')
  }

}

students.forEach(student => {
  createStudentComponent(student)
})