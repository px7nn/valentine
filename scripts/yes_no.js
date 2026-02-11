const no = document.querySelector('.no')
        const yes = document.querySelector('.yes')

        no.addEventListener('mouseenter', () => {
            const x = Math.random() * window.innerWidth * 0.6 - 100;
            const y = Math.random() * window.innerHeight * 0.6 - 50;

            no.style.position = "absolute";
            no.style.left = `${x}px`;
            no.style.top = `${y}px`;
        })

        yes.addEventListener('mouseup', () =>{
            document.querySelectorAll('.opt').forEach(e => e.classList.add('hide'));
            document.querySelector('.cat').classList.add('cat-animate');
        })
