function slicerDicer() {
    // Where to slice
    const toSlice = document.querySelector("#sliceWhat").value;
    const whereSlice = document.querySelector("#sliceWhere").value;
    // Error Message
    const errorMessage = document.querySelector(".errorMsg");
    // Radio Button
    const beforeBtn = document.querySelector("#before").checked;
    const afterBtn = document.querySelector("#after").checked;
    // Output
    const beforeOutput = document.querySelector(".beforeOutput");
    const afterOutput = document.querySelector(".afterOutput");
    // Slice Text

    if (toSlice.includes(whereSlice)) {
        errorMessage.textContent = "";
        let cut = toSlice.indexOf(whereSlice);
        if (beforeBtn === true) {
            const cuttedFront = toSlice.slice(0, cut);
            const cuttedBack = toSlice.slice(cut);
            beforeOutput.textContent = cuttedFront;
            afterOutput.textContent = cuttedBack;
        } else if (afterBtn === true) {
            cut++;
            const cuttedFront = toSlice.slice(0, cut);
            const cuttedBack = toSlice.slice(cut);
            beforeOutput.textContent = cuttedFront;
            afterOutput.textContent = cuttedBack;
        }
    } else {
        errorMessage.textContent = "Value not found";
    }
}
