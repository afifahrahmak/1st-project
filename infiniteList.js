const body = document.body;

const addName = document.forms['nameform'];
addName.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addName.querySelector('input[type="text"]').value;
    const mainHeader = document.querySelector('#main-header strong');
    mainHeader.textContent = value
    document.querySelector('#landing').style.display = 'none'
    document.querySelector('#main-page').style.display = 'block'
    document.body.style.overflow = 'scroll';
})

const note = document.querySelector('#noteId');

note.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        const list = e.target.parentElement;
        note.removeChild(list);
    }
})

note.addEventListener('click',function(e){

    if(e.target.className == 'done'){
        const list = e.target.parentElement;
        list.firstElementChild.classList.add('done-note');
        list.firstElementChild.classList.remove('done');
        // console.log(list.firstElementChild, 'bbbb');
        list.firstElementChild.nextElementSibling.style.color = '#dadada'
    }else if(e.target.className == 'done-note'){
        const list = e.target.parentElement;
        list.firstElementChild.classList.remove('done-note')
        list.firstElementChild.classList.add('done');
        // console.log(list.firstElementChild.nextSibling, 'aaaaa');
        list.firstElementChild.nextElementSibling.style.color = 'black'
       
    }

})

const addNote = document.forms['note-form'];
addNote.addEventListener('keypress',function(e){
    if(e.which == 13){
        e.preventDefault();
        const noteValue = addNote.querySelector('textarea').value;
        console.log(noteValue);
        if(noteValue == ''){

        }else{
            const control = document.querySelector('#textarea-note');
            control.value = '';
            

            const notelist = document.createElement('div');
            notelist.classList.add('note-list');
            const done = document.createElement('span');
            done.classList.add('done');
            const p = document.createElement('p');
            const deleteSpan = document.createElement('span');
            deleteSpan.classList.add('delete');
            deleteSpan.textContent = 'delete';
            p.textContent = noteValue;
            done.textContent = 'done';
            notelist.appendChild(done);
            notelist.appendChild(p);
            notelist.appendChild(deleteSpan);
            note.appendChild(notelist);
            body.scrollTop = body.scrollHeight;
        }
    }
})


const addBtn = document.querySelector('#btn-add')
addBtn.addEventListener('click',function(e){
    e.preventDefault();
    const noteValue = addNote.querySelector('textarea').value;
    console.log(noteValue);
    if(noteValue == ''){

    }else{
        const control = document.querySelector('#textarea-note');
        control.value = '';
        

        const notelist = document.createElement('div');
        notelist.classList.add('note-list');
        const done = document.createElement('span');
        done.classList.add('done');
        const p = document.createElement('p');
        const deleteSpan = document.createElement('span');
        deleteSpan.classList.add('delete');
        deleteSpan.textContent = 'delete';
        p.textContent = noteValue;
        done.textContent = 'done';
        notelist.appendChild(done);
        notelist.appendChild(p);
        // $('p').flowtype({
        //     fontRatio: 3.6;
        //   });
        notelist.appendChild(deleteSpan);
        note.appendChild(notelist);
        body.scrollTop = body.scrollHeight;
    }    
})

