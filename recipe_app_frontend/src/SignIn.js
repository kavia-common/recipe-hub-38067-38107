import React from 'react';
import './App.css';
import './signin.css';

// PUBLIC_INTERFACE
export default function SignIn() {
  /**
   * This component renders the Sign In screen adapted from the provided Figma export.
   * It uses the flattened HTML/CSS structure while translating to JSX semantics.
   * Assets are served from /assets copied into public.
   */
  return (
    <div id="screen-sign-in-11-235" className="screen style-10" role="main" aria-label="Sign In Screen">
      {/* Status Bar (decorative for visual parity) */}
      <div id="comp-13-71" className="abs" style={{ left: 0, top: 0, width: 375, height: 44 }} aria-hidden="true">
        <div className="abs" style={{ left: 29.5, top: 12, width: 180, height: 22 }}>
          <div className="text typo-67" style={{ position: 'absolute', left: 29.5, top: 14, width: 37, height: 18 }}>19:27</div>
        </div>
        <div className="abs" style={{ left: 293.5, top: 16.6, width: 68, height: 13 }} />
      </div>

      {/* Title group */}
      <div id="grp-13-110" className="abs" style={{ left: 30, top: 94, width: 155, height: 75 }}>
        <div className="text typo-60" style={{ position: 'absolute', left: 0, top: 0, width: 84, height: 45 }}>Hello,</div>
        <div className="text typo-61" style={{ position: 'absolute', left: 0, top: 45, width: 155, height: 30 }}>Welcome Back!</div>
      </div>

      {/* Input field Email */}
      <div id="comp-30-585" className="abs" style={{ left: 30, top: 226, width: 315, height: 81 }}>
        <div className="abs style-30" style={{ left: 0, top: 26, width: 315, height: 55 }} />
        <label className="text typo-66" style={{ position: 'absolute', left: 0, top: 0, width: 60, height: 21 }} htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          aria-label="Email"
          className="abs input-like"
          style={{ left: 20, top: 45, width: 275, height: 24 }}
        />
      </div>

      {/* Input field Password */}
      <div id="comp-30-590" className="abs" style={{ left: 30, top: 337, width: 315, height: 81 }}>
        <div className="abs style-30" style={{ left: 0, top: 26, width: 315, height: 55 }} />
        <label className="text typo-66" style={{ position: 'absolute', left: 0, top: 0, width: 107, height: 21 }} htmlFor="password">Enter Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          aria-label="Password"
          className="abs input-like"
          style={{ left: 20, top: 45, width: 275, height: 24 }}
        />
      </div>

      {/* Forgot Password */}
      <div id="grp-12-91" className="abs" style={{ left: 40, top: 438, width: 120, height: 17 }}>
        <button className="text typo-62 linklike" style={{ position: 'absolute', left: 0, top: 0, width: 120, height: 17 }}>
          Forgot Password?
        </button>
      </div>

      {/* Big Sign In Button */}
      <button
        id="btn-54-668"
        className="abs style-11 cta"
        style={{ left: 30, top: 480, width: 315, height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}
        aria-label="Sign In"
      >
        <span className="text typo-58">Sign In</span>
        <img alt="Arrow Right" src="/assets/figma_image_30_781.png" className="img" style={{ width: 20, height: 20 }} />
      </button>

      {/* Or sign in with line */}
      <div id="grp-12-139" className="abs" style={{ left: 90, top: 560, width: 195, height: 17 }}>
        <div className="abs style-28" style={{ left: 145, top: 9, width: 50, height: 1 }} />
        <div className="abs style-28" style={{ left: 0, top: 9, width: 50, height: 1 }} />
        <div className="text typo-64" style={{ position: 'absolute', left: 57, top: 0, width: 100, height: 17 }}>Or Sign in With</div>
      </div>

      {/* Google Button */}
      <button id="btn-13-35" className="abs social" style={{ left: 131, top: 597, width: 44, height: 44 }} aria-label="Sign in with Google">
        <div className="abs style-126" style={{ left: 0, top: 0, width: 44, height: 44 }} />
        <img alt="Google" src="/assets/figma_image_30_811.png" className="abs img" style={{ left: 12, top: 12, width: 20, height: 20 }} />
      </button>

      {/* Facebook Button */}
      <button id="btn-13-49" className="abs social" style={{ left: 200, top: 597, width: 44, height: 44 }} aria-label="Sign in with Facebook">
        <div className="abs style-126" style={{ left: 0, top: 0, width: 44, height: 44 }} />
        <img alt="Facebook" src="/assets/figma_image_30_841.png" className="abs img" style={{ left: 12, top: 12, width: 20, height: 20 }} />
      </button>

      {/* Don’t have account */}
      <div id="txt-13-67" className="abs" style={{ left: 99, top: 696, width: 200, height: 17 }}>
        <div className="text typo-63">Don’t have an account? Sign up</div>
      </div>

      {/* Home Indicator */}
      <div id="comp-42-614" className="abs" style={{ left: 0, top: 782, width: 375, height: 34 }} aria-hidden="true">
        <div className="abs style-32" style={{ left: 120, top: 21, width: 135, height: 5 }} />
      </div>
    </div>
  );
}
