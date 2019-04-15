

const createStudentComponent = (student) => {
  const container = document.querySelector('#container'),
    div = document.createElement('div'),
    h2 = document.createElement('h2'),
    section = document.createElement('section'),
    aside = document.createElement('aside')

  h2.textContent = student.name
  section.textContent = student.subject
  aside.textContent = student.info

  if (student.score >= 60) {
    h2.classList.add('xx-large','passing')
    section.classList.add('bordered','dashed', 'section--padded')
    aside.classList.add('pushRight')
  }

  container.appendChild(div)
  div.appendChild(h2)
  div.appendChild(section)
  div.appendChild(aside)
}

students.forEach(student => {
createStudentComponent(student)
})


