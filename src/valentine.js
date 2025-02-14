document.addEventListener('DOMContentLoaded', () => {
    const mysteryBox = document.querySelector('.mystery-box');
    const boxLid = document.querySelector('.box-lid');
    const contentContainer = document.querySelector('.content-container');
    
    mysteryBox.addEventListener('click', () => {
        // First open the lid with the 3D animation
        boxLid.classList.add('open');
        document.body.classList.add('box-opened');
        
        // Wait for lid animation to complete
        setTimeout(() => {
            mysteryBox.classList.add('open');
            
            // Wait for box opening animation to complete
            setTimeout(() => {
                mysteryBox.style.display = 'none';
                contentContainer.classList.remove('hidden');
                setTimeout(() => {
                    contentContainer.classList.add('visible');
                }, 100);
            }, 1000);
        }, 1000); // Increased delay to match the new animation duration
    });

    // Add reload animation functionality
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.mystery-box')) {
            mysteryBox.style.display = 'block';
            boxLid.classList.remove('open');
            mysteryBox.classList.remove('open');
            contentContainer.classList.add('hidden');
            contentContainer.classList.remove('visible');
            document.body.classList.remove('box-opened');
        }
    });
});