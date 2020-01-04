'use strict';

function markNotDone(todoManager, request, response) {
  const id = request.params.id;

  todoManager.markAsNotDone(id)
    .then(todo => {
      response.json({ todo });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = markNotDone;
