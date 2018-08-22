'use strict';

function preview(form) {
  if (!form || !form.nodeType) {
    throw new TypeError('Form must be a valid node element');
  }

  const input = form.querySelector('#input');
  const output = form.querySelector('#output');

  if (!input || !input.nodeType) {
    throw new TypeError(
      'Input should be a valid node element with an ID of #input'
    );
  }

  if (!output || !output.nodeType) {
    throw new TypeError(
      'Output should be a valid node element with an ID of #output'
    );
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  input.addEventListener('keyup', () => {
    if (input.value.length === 0) {
      output.value = '';
    }

    fetch(`/api/timestamp/${encodeURIComponent(input.value)}`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        return res;
      })
      .then(res => res.json())
      .then((res) => {
        output.value = JSON.stringify(res, null, 2);
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(err));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  preview(document.querySelector('form'));
});
