const delete_form = document.getElementById("delete_form");
const alter_form = document.getElementById("alter_form");


delete_form.addEventListener('click', () => {
  // fetch request
  fetch('/quotes', {
    method: 'put',
    body: json.stringify(delete_id),
    header: {"Content-Type": "Application/JSON"}
  })
})


alter_form.addEventListener('click', () => {
  fetch('/quotes', {
    method: 'put',
    body: json.stringify({altered_id, alter_name, alter_quote}),
    header: {"Content-Type": "Application/JSON"}
  })
})

