$(document).ready(function () {

    //A way to toggle our form so we can see how jQuery affects our app's design. First, we should make it so that our newTaskForm is hidden when the document loads
    $('#newTaskForm').hide();

    var advanceTask = function (task) {
        var modified = task.innerText.trim()
        for (var i = 0; i < listo.length; i++) {
            if (listo[i].task === modified) {
                if (listo[i].id === 'new') {
                    listo[i].id = 'inProgress';
                } else if (listo[i].id === 'inProgress') {
                    listo[i].id = 'archived';
                } else {
                    listo.splice(i, 1);
                }
                break;
            }
        }
        task.remove();
    };

    //Create new array
    var listo = [];

    //Because our users are going to be making a lot of Tasks we should perhaps streamline the object creating process with a constructor
    var Task = function (task) {
        this.task = task;
        this.id = 'new';
    }

    //When we enter something into the input field and hit save, we want to create an object and push it to our array.
    var addTask = function (task) {
        if (task) { //conditional so it only runs if task is there.

            // We want to call our task constructor and fill it with the new task, then we will push the new task to listo, and save it.
            task = new Task(task);
            listo.push(task);

            //We want the input form to clear after we submit it, which currently isn't happening. Then we want to make it so we can show our new list item in our index.html.
            $('#newItemInput').val('');
            $('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>')
        }
        //Add the fade toggle so that our New button will hide and show the input form at the same time.
        $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
    };

    //Call a jQuery event that calls the addTask function when we click the saveNewItem button.
    $('#saveNewItem').on('click', function (e) {
        e.preventDefault();
        var task = $('#newItemInput').val().trim();
        addTask(task);
    });

    //Opens form
    $('#newListItem').on('click', function () {
        $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
    });

    //Closes form
    $('#cancel').on('click', function (e) {
        e.preventDefault();
        $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
    });

    //Make a function that allows us to change the status of an item from 'new' to 'inProgress'.

    //We will need to call the document so that as we create and manipulate html elements, the DOM realizes that they're there.

    //Another weird thing is e.preventDefault(); All this is saying is that we are preventing the default action for the event from being triggered. If we want an anchor tag so we can click on list items, but we don't want all of the baggage that comes with an anchor tag (like refreshing the page, or trying to take us to a new page) then this line of code will allow us to do that.

    //The last weird thing is that we are listing '#item' near our 'click' event. This is just so we can specify what we are affecting when we click.
    $(document).on('click', '#item', function (e) {
        e.preventDefault();
    });

    //Set a variable called task so that we can access the 'this' keyword to pass it into another function.

    //We are also going to change it's ID to the string 'inProgress'.
    $(document).on('click', '#item', function (e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
        this.id = 'inProgress';
        //The last thing this function needs is the ability to move the actual list item. We do that by pulling all of the html around the item itself.
        $('#currentList').append(this.outerHTML);

    });

    //We can also move the items from 'inProgress' to 'archived' with a similar function from above.
    $(document).on('click', '#inProgress', function (e) {
        e.preventDefault();
        var task = this;
        task.id = "archived";
        var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
        advanceTask(task);
        $('#archivedList').append(changeIcon);
    });

    //Finally, in a similar fashion we want to create a way to delete the items on the list. All we have to do is pass a task into the advanceTask function without a new id. 
    $(document).on('click', '#archived', function (e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
    });


});