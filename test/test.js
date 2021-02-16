const { assert } = require("chai");
const taskMgr = require('../js/taskManager');
const TaskManager = taskMgr.TaskManager;

describe('TaskManager', () => {
    describe('.addTask', () => {
        it('Add the task to the task panel.', () => {
             //your test goes here
            const task = new TaskManager();
            const answer = task.addTask('homeWork', 'shoud be done.', 'alex', 'todo', '02/16/2021');
            assert.equal(addTask(),('pass'));
            
        });
    });
});
