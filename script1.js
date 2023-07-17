const input = document.querySelector('input');  
        const btn = document.querySelector('.addtask > button');
        btn.addEventListener('click', addlist)
        input.addEventListener('keyup', (e)=>{
            (e.keycode == 13 ? addlist(e) : null)
;        })
        
        function addlist(e){
            const notcompleted = document.querySelector('notcompleted'); 
            const completed = document.querySelector('completed');

            const newli = document('li');
            const checkbtn = document.createElement('button');  
            const dleBtn = document.createElement('button');

            checkBtn.innerHTML = '<i class="fa fa-check"></i>';
            delBtn.innerHTML = '<i class="fa fa-trash"></i>';

            if(input.value !==''){
                newli.textcontent = input.value;
                input.value ='';
                notcompleted.appendChild(newli);
                newli.appendChild(checkBtn)
                newli.appendChild(delBtn)
            }
            
            checkBtn.addEventListener('click', function(){
                const parent = this.parentNode;
                parent.remove();
                completed.appendChild(parent);
                checkBtn.style.dispaly = 'none';

            });

            delkBtn.addEventListener('click', function(){
                const parent = this.parentNode;
                parent.remove();
                completed.appendChild(parent);
                checkBtn.style.dispaly = 'none';

            });


              }
