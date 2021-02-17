const { assert } = require("chai");
const taskMgr = require('../js/taskManager');
const TaskManager = taskMgr.TaskManager;

let task = new TaskManager();
describe('TaskManager', () => {
    describe('.addTask', () => {
        it("adds task object to the task array", () => {
            const expectedResult = "object";
            const result = typeof task.addTask();
            assert.ok(result == expectedResult);
            
        });
    });
});
