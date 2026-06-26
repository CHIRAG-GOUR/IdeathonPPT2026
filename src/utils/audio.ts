export const playWhooshSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const bufferSize = ctx.sampleRate * 1; // 1 second buffer
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Create pink-ish noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.5; // lower volume noise
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;

    // Filter to sweep down (creating a whoosh/wind effect)
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.Q.value = 1;
    filter.frequency.setValueAtTime(400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.5);

    // Gain node for fade in and fade out
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.1); // Quick fade in
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5); // Smooth fade out

    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseSource.start();
    noiseSource.stop(ctx.currentTime + 0.5);
  } catch (e) {
    console.error("Audio playback failed", e);
  }
};

export const playStartupSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Ambient Deep Drone (A Major/Suspended)
    const frequencies = [55.00, 110.00, 164.81, 220.00, 329.63, 440.00]; 
    
    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      // Lower frequencies use sine for deep bass, higher use triangle for harmonics
      osc.type = i < 2 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, ctx.currentTime);
      // Slow 3-second cinematic swell
      gain.gain.linearRampToValueAtTime(0.15 / (i + 1), ctx.currentTime + 3);
      // Very slow 8-second fade out
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 12);
      
      const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
      if (panner) {
        panner.pan.value = (i % 2 === 0 ? 0.6 : -0.6);
        osc.connect(gain);
        gain.connect(panner);
        panner.connect(ctx.destination);
      } else {
        osc.connect(gain);
        gain.connect(ctx.destination);
      }
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 12);
    });

    // Crystalline synth shimmer after 2.5 seconds (the "whoosh" part of PS2)
    setTimeout(() => {
      if (ctx.state === 'closed') return;
      const crystalFreqs = [880.00, 1318.51, 1760.00]; 
      crystalFreqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq + (Math.random() * 5); // Slight detune for shimmer
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 6);

        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 1000;

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 6);
      });
    }, 2500);

  } catch (e) {
    console.error("Startup audio failed", e);
  }
};

