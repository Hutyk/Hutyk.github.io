class SmartHouse{

}
// Освітлення
class Lighting extends SmartHouse {
    showlightingMenu() {
            $(".lightingbtn").one("click", function clickL () {
            document.querySelector(".workingarea").insertAdjacentHTML("beforeend",'<form action="" class="lightingmenu"><h4>Освітлення:</h4><label class="switch"><input type="checkbox" id="light"><span class="slider round"></span></label>Світло (вкл/викл)<br><label class="switch"><input type="checkbox" id="additionalLight"><span class="slider round"></span></label>Додаткове світло (вкл/викл)<br><label class="switch"><input type="checkbox" id="outdoorlLight"><span class="slider round"></span></label>Зовнішнє Освітлення (вкл/викл)<br><label class="sliderRange"><input type="range" min="0" max="100" value="0" class="sliderR" id="myRange"><br><p id="Brightness">Яскравість: 0%</p></label><button id="closeL">Закрити меню</button></form>');
            // меню управління світлом
            // Увімкнути світло
            let light = document.getElementById("light");
            let sliderBrightness = document.getElementById("myRange");
            sliderBrightness.disabled = true;
            let outputBrightness = document.getElementById("Brightness");
            light.addEventListener("change", () => {
                outputBrightness.innerHTML = `Яскравість: ${sliderBrightness.value}%`;
                sliderBrightness.oninput = function () {
                    outputBrightness.innerHTML = `Яскравість: ${this.value}%`;
                }
                if (light.checked == false) {
                    sliderBrightness.disabled = true;
                }
                if (light.checked) {
                    sliderBrightness.disabled = false;
                    sliderBrightness.value = 70;
                    outputBrightness.innerHTML = `Яскравість: ${sliderBrightness.value}%`;
                    popUpsText("Світло включено.", `Яскравість: ${sliderBrightness.value}%`);
                    popUpsTime();
                } else {
                    sliderBrightness.value = 0;
                    outputBrightness.innerHTML = `Яскравість: ${sliderBrightness.value}%`;
                    popUpsText("Світло виключено.", `Яскравість: ${sliderBrightness.value}%`);
                    popUpsTime();
                }
                sliderBrightness.addEventListener("change", () => {
                    popUpsText("Світло включено.", `Яскравість: ${sliderBrightness.value}%`);
                                popUpsTime();
                })
            });
            // Увімкнути додаткове світло
            let additionalLight = document.getElementById("additionalLight");
            additionalLight.addEventListener("change", () => {
                outputBrightness.innerHTML = `Яскравість: ${sliderBrightness.value}%`;
                sliderBrightness.oninput = function () {
                    outputBrightness.innerHTML = `Яскравість: ${this.value}%`;
                }
                if (additionalLight.checked == false) {
                    sliderBrightness.disabled = true;
                }
                if (additionalLight.checked) {
                    sliderBrightness.disabled = false;
                    sliderBrightness.value = 90;
                    outputBrightness.innerHTML = `Яскравість: ${sliderBrightness.value}%`;
                    popUpsText("Додаткове світло включено.", `Яскравість: ${sliderBrightness.value}%`);
                    popUpsTime();
                } else if (light.checked) {
                    sliderBrightness.value = 70;
                    outputBrightness.innerHTML = `Яскравість: ${sliderBrightness.value}%`;
                    popUpsText("Світло включено.", `Яскравість: ${sliderBrightness.value}%`);
                    popUpsTime();
                } else {
                    sliderBrightness.value = 0;
                    outputBrightness.innerHTML = `Яскравість: ${sliderBrightness.value}%`;
                    popUpsText("Додаткове світло виключено.", `Яскравість: ${sliderBrightness.value}%`);
                    popUpsTime();
                }
            });
            // Зовнішнж світло
            let outdoorlLight = document.getElementById("outdoorlLight");
            outdoorlLight.addEventListener("change", () => {
                if (outdoorlLight.checked) {
                    sliderBrightness.disabled = false;
                    sliderBrightness.value = 70;
                    outputBrightness.innerHTML = `Яскравість: ${sliderBrightness.value}%`;
                    popUpsText("Зовнішнє світло включено.", `Яскравість: ${sliderBrightness.value}%`);
                    popUpsTime();
                } else {
                    sliderBrightness.disabled = true;
                    sliderBrightness.value = 0;
                    outputBrightness.innerHTML = `Яскравість: ${sliderBrightness.value}%`;
                    popUpsText("Зовнішнє світло виключено.", `Яскравість: ${sliderBrightness.value}%`);
                    popUpsTime();
                }
            });
            let button1Close = document.querySelector("#closeL");
            button1Close.addEventListener("click", () => {
                document.querySelector(".lightingmenu").remove(this);
                $(".lightingbtn").one("click", clickL);
            });
        });
    }
}
// Опалення
class Heating extends SmartHouse{
    showHeatingMenu(){
            $(".heatingbtn").one("click", function clickH () {
        document.querySelector(".workingarea").insertAdjacentHTML("beforeend", '<form action="" class="heatingmenu"><h4>Опалення:</h4><label class="switch"><input type="checkbox" id="heat"><span class="slider round"></span></label>Опалення (вкл/викл)<br><label class="number"><p class="temp">Температура:</p><button class="minus">-</button><input type="text" value="22" class="thisTemp"><button class="plus">+</button></label><br><button id="closeH">Закрити меню</button></form>');
        let heat = document.getElementById("heat");
        let temp = document.querySelector(".thisTemp");
            document.querySelector(".minus").disabled = true;
            document.querySelector(".plus").disabled = true;
            heat.addEventListener("change", () => {
                if (heat.checked) {
                    document.querySelector(".minus").disabled = false;
                    document.querySelector(".plus").disabled = false;
                    popUpsText("Опалення включено.", `Задана температура: ${temp.value}C`);
                    popUpsTime();
                } else {
                    document.querySelector(".minus").disabled = true;
                    document.querySelector(".plus").disabled = true;
                    popUpsText("Опалення виключено.", "  ");
                    popUpsTime();
                }
            })
            // Зменшення-збільшення температури
            $(document).ready(function() {
                    $('.minus').click(function () {
                        let $input = $(this).parent().find('input');
                        let count = parseInt($input.val()) - 1;
                        count = count < 16 ? 16 : count;
                        $input.val(count);
                        $input.change();
                            if ($input.change()) {
                                popUpsText("Опалення включено.", `Задана температура: ${temp.value}C`);
                                popUpsTime();
                            }
                        return false;
                    });
                    $('.plus').click(function () {
                        let $input = $(this).parent().find('input');
                        let count = parseInt($input.val()) + 1;
                        count = count > 35 ? 35 : count;
                        $input.val(count);
                        $input.change();
                            if ($input.change()) {
                                popUpsText("Опалення включено.", `Задана температура: ${temp.value}C`);
                                popUpsTime();
                            }
                            return false;
                    });
            });
            let button2Close = document.querySelector("#closeH");
            button2Close.addEventListener("click", () => {
                document.querySelector(".heatingmenu").remove(this);
                $(".heatingbtn").one("click", clickH);
            });
        });
    }
}
// Вентиляція
class Ventilation extends SmartHouse{
    showVentilationMenu(){
            $(".ventilationbtn").one("click", function clickV () {
        document.querySelector(".workingarea").insertAdjacentHTML("beforeend", '<form action="" class="ventilationmenu"><h4>Вентиляція:</h4><label class="switch"><input type="checkbox" id="vent"><span class="slider round"></span></label>Вентиляція (вкл/викл)<br><p class="mode">Режим роботи:</p><label class="switchmode"><input type="radio" value="Зима" name="radio input" id="winter"></label>Зима<label class="switchmode"><input type="radio" value="Літо" name="radio input" id="summer"></label>Літо<label class="switchmode"><input type="radio" value="Авто" name="radio input" id="auto"></label>Авто<br><label class="number"><p class="temp">Температура:</p><button class="minusvent">-</button><input type="text" value="22" class="thisTempvent"><button class="plusvent">+</button><br><button id="closeV">Закрити меню</button></label></form>');
        let vent = document.getElementById("vent");
        let temp = document.querySelector(".thisTempvent");
        let winter = document.querySelector("#winter");
        let summer = document.querySelector("#summer");
        let auto = document.querySelector("#auto");
            winter.disabled = true;
            summer.disabled = true;
            auto.disabled = true;
            document.querySelector(".minusvent").disabled = true;
            document.querySelector(".plusvent").disabled = true;
            vent.addEventListener("change", () => {
                if (vent.checked) {
                    winter.disabled = false;
                    summer.disabled = false;
                    auto.disabled = false;
                    document.querySelector(".minusvent").disabled = false;
                    document.querySelector(".plusvent").disabled = false;
                    popUpsText("Вентиляція включена.", `Задана температура: ${temp.value}C`);
                    popUpsTime();
                } else {
                    winter.disabled = true;
                    summer.disabled = true;
                    auto.disabled = true;
                    document.querySelector(".minusvent").disabled = true;
                    document.querySelector(".plusvent").disabled = true;
                    popUpsText("Вентиляція виключена.", "  ");
                    popUpsTime();
                }
            })
            // режим роботи
                winter.addEventListener('click', function() {
                    popUpsText(`Вентиляція включена. <br> Режим роботи: ${winter.value}`, `Задана температура: ${temp.value}C`);
                    popUpsTime();
                });
                summer.addEventListener('click', function() {
                    popUpsText(`Вентиляція включена. <br> Режим роботи: ${ summer.value }`, `Задана температура: ${temp.value}C`);
                    popUpsTime();
                });
                auto.addEventListener('click', function() {
                    popUpsText(`Вентиляція включена. <br> Режим роботи: ${auto.value}`, `Задана температура: ${temp.value}C`);
                    popUpsTime();
                });
            // Зменшення-збільшення температури
            $(document).ready(function() {
                    $('.minusvent').click(function () {
                        let $input = $(this).parent().find('input');
                        let count = parseInt($input.val()) - 1;
                        count = count < 16 ? 16 : count;
                        $input.val(count);
                        $input.change();
                            if ($input.change()) {
                                popUpsText("Вентиляція включена.", `Задана температура: ${temp.value}C`);
                                popUpsTime();
                            }
                        return false;
                    });
                    $('.plusvent').click(function () {
                        let $input = $(this).parent().find('input');
                        let count = parseInt($input.val()) + 1;
                        count = count > 35 ? 35 : count;
                        $input.val(count);
                        $input.change();
                            if ($input.change()) {
                                popUpsText("Вентиляція включена.", `Задана температура: ${temp.value}C`);
                                popUpsTime();
                            }
                            return false;
                    });
            });
            let button3Close = document.querySelector("#closeV");
            button3Close.addEventListener("click", () => {
                document.querySelector(".ventilationmenu").remove(this);
                $(".ventilationbtn").one("click", clickV);
            });
        });
    }
}
// Кондиціювання
class Conditioning extends SmartHouse{
    showConditioningMenu(){
            $(".conditioningbtn").one("click", function clickC () {
        document.querySelector(".workingarea").insertAdjacentHTML("beforeend", '<form action="" class="conditioningmenu"><h4>Кондиціювання:</h4><label class="switch"><input type="checkbox" id="cond"><span class="slider round"></span></label>Кондиціонер (вкл/викл)<br><p class="mode">Режим роботи:</p><label class="switchmode"><input type="radio" value="Нагрів" name="radio input" id="wintercond"></label>Нагрів<label class="switchmode"><input type="radio" value="Охолодження" name="radio input" id="summercond"></label>Охолодження<label class="switchmode"><input type="radio" value="Авто" name="radio input" id="autocond"></label>Авто<br><label class="number"><p class="temp">Температура:</p><button class="minuscond">-</button><input type="text" value="22" class="thisTempcond"><button class="pluscond">+</button><br><button id="closeC">Закрити меню</button></label></form>');
        let cond = document.getElementById("cond");
        let temp = document.querySelector(".thisTempcond");
        let winter = document.querySelector("#wintercond");
        let summer = document.querySelector("#summercond");
        let auto = document.querySelector("#autocond");
            winter.disabled = true;
            summer.disabled = true;
            auto.disabled = true;
            document.querySelector(".minuscond").disabled = true;
            document.querySelector(".pluscond").disabled = true;
            cond.addEventListener("change", () => {
                if (cond.checked) {
                    winter.disabled = false;
                    summer.disabled = false;
                    auto.disabled = false;
                    document.querySelector(".minuscond").disabled = false;
                    document.querySelector(".pluscond").disabled = false;
                    popUpsText("Кондиціонер включений.", `Задана температура: ${temp.value}C`);
                    popUpsTime();
                } else {
                    winter.disabled = true;
                    summer.disabled = true;
                    auto.disabled = true;
                    document.querySelector(".minuscond").disabled = true;
                    document.querySelector(".pluscond").disabled = true;
                    popUpsText("Кондиціонер виключений.", "  ");
                    popUpsTime();
                }
            })
            // режим роботи
                winter.addEventListener('click', function() {
                    popUpsText(`Кондиціонер включений. <br> Режим роботи: ${winter.value}`, `Задана температура: ${temp.value}C`);
                    popUpsTime();
                });
                summer.addEventListener('click', function() {
                    popUpsText(`Кондиціонер включений. <br> Режим роботи: ${ summer.value }`, `Задана температура: ${temp.value}C`);
                    popUpsTime();
                });
                auto.addEventListener('click', function() {
                    popUpsText(`Кондиціонер включений. <br> Режим роботи: ${auto.value}`, `Задана температура: ${temp.value}C`);
                    popUpsTime();
                });
            // Зменшення-збільшення температури
            $(document).ready(function() {
                    $('.minuscond').click(function () {
                        let $input = $(this).parent().find('input');
                        let count = parseInt($input.val()) - 1;
                        count = count < 16 ? 16 : count;
                        $input.val(count);
                        $input.change();
                            if ($input.change()) {
                                popUpsText("Кондиціонер включений.", `Задана температура: ${temp.value}C`);
                                popUpsTime();
                            }
                        return false;
                    });
                    $('.pluscond').click(function () {
                        let $input = $(this).parent().find('input');
                        let count = parseInt($input.val()) + 1;
                        count = count > 35 ? 35 : count;
                        $input.val(count);
                        $input.change();
                            if ($input.change()) {
                                popUpsText("Кондиціонер включений.", `Задана температура: ${temp.value}C`);
                                popUpsTime();
                            }
                            return false;
                    });
            });
            let button4Close = document.querySelector("#closeC");
            button4Close.addEventListener("click", () => {
                document.querySelector(".conditioningmenu").remove(this);
                $(".conditioningbtn").one("click", clickC);
            });
        });
    }
}
// Гараж
class Garage extends SmartHouse{
    showGarageMenu() {
            $(".garagebtn").one("click", function clickG () {
            document.querySelector(".workingarea").insertAdjacentHTML("beforeend",'<form action="" class="garagemenu"><h4>Гараж:</h4><label class="switch"><input type="checkbox" id="garage"><span class="slider round"></span></label>Ворота (відкрити/закрити)<br><label class="switch"><input type="checkbox" id="garagevent"><span class="slider round"></span></label>Вентиляція гаража (вкл/викл)<br><button id="closeG">Закрити меню</button></form>');
            // меню управління гаражем
            // Відкрити ворота
            let garage = document.getElementById("garage");
            garage.addEventListener("change", () => {
                if (garage.checked) {
                    popUpsText("Ворота гаражу:", "Відкрито");
                    popUpsTime();
                } else {
                    popUpsText("Ворота гаражу:", "Закрито");
                    popUpsTime();
                }
            });
            // Увімкнути вентиляцію гаражу
            let garagevent = document.getElementById("garagevent");
            garagevent.addEventListener("change", () => {
                if (garagevent.checked) {
                    popUpsText("Витяжку гаражу:", "включено");
                    popUpsTime();
                } else {
                    popUpsText("Витяжку гаражу:", "виключено");
                    popUpsTime();
                }
            });
            let button5Close = document.querySelector("#closeG");
            button5Close.addEventListener("click", () => {
                document.querySelector(".garagemenu").remove(this);
                $(".garagebtn").one("click", clickG);
            });
        });
    }
}
// Камера
class Camera extends SmartHouse{
    showCameraMenu() {
            $(".camerabtn").one("click", function clickCam () {
            document.querySelector(".workingarea").insertAdjacentHTML("beforeend",'<form action="" class="cameramenu"><h4>Камера:</h4><label class="switch"><input type="checkbox" id="camera"><span class="slider round"></span></label>Камера (вкл/викл)<br><video id="video" ></video><button id="closeCam">Закрити меню</button></form>');
            // меню управління камерою
            // Включити камеру
                let camera = document.getElementById("camera");
                let webcamStream;
                function startWebcam() {
                    // запросить видео и аудио поток с веб-камеры пользователя
                    navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                    }).then((stream) => {
                    let video = document.querySelector('#video');
                    video.srcObject = stream;
                    video.play();
                    webcamStream = stream;
                    }).catch((error) => {
                        console.log('navigator.getUserMedia error: ', error);
                    });
                }
                function stopWebcam() {
                    webcamStream.getTracks()[0].stop(); // audio
                    webcamStream.getTracks()[1].stop(); // video
                }
            camera.addEventListener("change", () => {
                if (camera.checked) {
                    startWebcam()
                    popUpsText("Камеру:", "включено");
                    popUpsTime();
                } else {
                    stopWebcam()
                    popUpsText("Камеру:", "виключено");
                    popUpsTime();
                }
            });
            let button6Close = document.querySelector("#closeCam");
            button6Close.addEventListener("click", () => {
                document.querySelector(".cameramenu").remove(this);
                $(".camerabtn").one("click", clickCam);
            });
        });
    }
}
// Музика
class Music extends SmartHouse{
    showMusicMenu() {
        $(".musicbtn").one("click", function clickM() {
            document.querySelector(".workingarea").insertAdjacentHTML("beforeend",
                `<form action="" class="musicmenu">
                    <h4>Музика:</h4>
                        <div class="player">
                                <!-- Define the section for displaying details -->
                            <div class="details">
                                <div class="track-name">Track Name</div>
                                <div class="track-artist">Track Artist</div>
                            </div>
                                <!-- Define the section for displaying track buttons -->
                            <div class="buttons">
                                <div class="prev-track">
                                    <i class="fa fa-step-backward fa-sm"></i>
                                </div>
                                <div class="playpause-track">
                                    <i class="fa fa-play-circle fa-2x"></i>
                                </div>
                                <div class="next-track">
                                    <i class="fa fa-step-forward fa-sm"></i>
                                </div>
                            </div>
                                <!-- Define the section for displaying the seek slider-->
                            <div class="slider_container">
                                <div class="current-time">00:00</div>
                                <input type="range" min="1" max="100"
                                    value="0" class="seek_slider">
                                <div class="total-duration">00:00</div>
                            </div>
                                <!-- Define the section for displaying the volume slider-->
                            <div class="slider_container">
                                <i class="fa fa-volume-down"></i>
                                <input type="range" min="1" max="100"
                                    value="99" class="volume_slider">
                                <i class="fa fa-volume-up"></i>
                            </div>
                        </div>
                    <button id="closeM">Закрити меню</button>
                </form>`);
            //  Music
            // let track_art = document.querySelector(".track-art");
            let track_name = document.querySelector(".track-name");
            let track_artist = document.querySelector(".track-artist");

            let playpause_btn = document.querySelector(".playpause-track");
            let next_btn = document.querySelector(".next-track");
            let prev_btn = document.querySelector(".prev-track");

            let seek_slider = document.querySelector(".seek_slider");
            let volume_slider = document.querySelector(".volume_slider");
            let curr_time = document.querySelector(".current-time");
            let total_duration = document.querySelector(".total-duration");

            // Specify globally used values
            let track_index = 0;
            let isPlaying = false;
            let updateTimer;

            // Create the audio element for the player
            let curr_track = document.createElement('audio');

            // Define the list of tracks that have to be played
            let track_list = [
                {
                    name: "Давай Начистоту",
                    artist: "KALUSH feat. Skofka",
                    path: "audio/Kalush, Skofka - Давай Начистоту.mp3"
                },
                {
                    name: "Додому",
                    artist: "TKALUSH feat. Skofka",
                    path: "audio/KALUSH feat. Skofka - Додому.mp3"
                },
                {
                    name: "Гори",
                    artist: "KALUSH feat. Alyona Alyona",
                    path: "audio/KALUSH, Alyona Alyona - Гори.mp3",
                },
            ];
            function loadTrack(track_index) {
                // Clear the previous seek timer
                clearInterval(updateTimer);
                resetValues();
                // Load a new track
                curr_track.src = track_list[track_index].path;
                curr_track.load();
                // Update details of the track
                track_name.textContent = track_list[track_index].name;
                track_artist.textContent = track_list[track_index].artist;
                // Set an interval of 1000 milliseconds
                // for updating the seek slider
                updateTimer = setInterval(seekUpdate, 1000);

                // Move to the next track if the current finishes playing
                // using the 'ended' event
                curr_track.addEventListener("ended", function nextTrack() {
                // Go back to the first track if the
                // current one is the last in the track list
                if (track_index < track_list.length - 1)
                    track_index += 1;
                else track_index = 0;

                // Load and play the new track
                loadTrack(track_index);
                playTrack();
                });

            }

            // Function to reset all values to their default
            function resetValues() {
                curr_time.textContent = "00:00";
                total_duration.textContent = "00:00";
                seek_slider.value = 0;
            }
            playpause_btn.addEventListener("click",
                function playpauseTrack() {
                    // Switch between playing and pausing
                    // depending on the current state
                    if (!isPlaying) playTrack(),popUpsText("Музику:", "включено"),popUpsTime();
                    else pauseTrack(), popUpsText("Музику:", "виключено"),popUpsTime();
                });

            function playTrack() {
                // Play the loaded track
                curr_track.play();
                isPlaying = true;

                // Replace icon with the pause icon
                playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
            }

            function pauseTrack() {
                // Pause the loaded track
                curr_track.pause();
                isPlaying = false;

                // Replace icon with the play icon
                playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
            }

            next_btn.addEventListener("click", function nextTrack() {
                // Go back to the first track if the
                // current one is the last in the track list
                if (track_index < track_list.length - 1)
                    track_index += 1;
                else track_index = 0;

                // Load and play the new track
                loadTrack(track_index);
                playTrack();
            });

            prev_btn.addEventListener("click", function prevTrack() {
                // Go back to the last track if the
                // current one is the first in the track list
                if (track_index > 0)
                    track_index -= 1;
                else track_index = track_list.length - 1;
                // Load and play the new track
                loadTrack(track_index);
                playTrack();
            });
            seek_slider.addEventListener("change", function seekTo() {
                // Calculate the seek position by the
                // percentage of the seek slider
                // and get the relative duration to the track
                let seekto = curr_track.duration * (seek_slider.value / 100);

                // Set the current track position to the calculated seek position
                curr_track.currentTime = seekto;
            });

            volume_slider.addEventListener("change", function setVolume() {
                // Set the volume according to the
                // percentage of the volume slider set
                curr_track.volume = volume_slider.value / 100;
            });

            function seekUpdate() {
            let seekPosition = 0;

            // Check if the current track duration is a legible number
            if (!isNaN(curr_track.duration)) {
                seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                seek_slider.value = seekPosition;

                // Calculate the time left and the total duration
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

                // Add a zero to the single digit time values
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

                // Display the updated duration
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
            }
            // Load the first track in the tracklist
            loadTrack(track_index);

                let button7Close = document.querySelector("#closeM");
                button7Close.addEventListener("click", () => {
                    document.querySelector(".musicmenu").remove(this);
                    $(".musicbtn").one("click", clickM);
                    pauseTrack();
                });
        });
    }


}
// вспливаюче вікно
function popUpsTime() {
    let popUpsContainer = document.getElementById("pop-upscontainer");
    setTimeout(() => {
        popUpsContainer.style.opacity = "0";
    }, 3000);
    return popUpsContainer.style.opacity = "1";
}
function popUpsText(title, message) {
    document.getElementsByClassName("pop-ups-title")[0].innerHTML= title;
    document.getElementsByClassName("pop-upsmessage")[0].innerText = message;
}

// Освітлення
let lightingMenu = new Lighting();
lightingMenu.showlightingMenu();
// Опалення
let heatingMenu = new Heating();
heatingMenu.showHeatingMenu();
// Вентиляція
let ventilationmenu = new Ventilation();
ventilationmenu.showVentilationMenu();
// Кондиціювання
let conditioningmenu = new Conditioning();
conditioningmenu.showConditioningMenu();
// Гараж
let garagemenu = new Garage();
garagemenu.showGarageMenu();
// Камера
let cameramenu = new Camera();
cameramenu.showCameraMenu();
// Музика
let musicmenu = new Music();
musicmenu.showMusicMenu();