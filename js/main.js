

const createStudentComponent = (student) => {
  const container = document.querySelector('#container'),
    div = document.createElement('div'),
    h2 = document.createElement('h2'),
    section = document.createElement('section'),
    aside = document.createElement('aside')

  h2.textContent = student.name
  section.textCoontent = student.subject
  aside.textContent = student.info

  container.appendChild(div)
  div.appendChild(h2)
  div.appendChild(section)
  div.appendChild(aside)
}

students.forEach(student => {
createStudentComponent(student)
})


