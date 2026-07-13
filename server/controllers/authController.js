const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const generateResetToken = require("../utils/generateResetToken");
const bcrypt = require("bcryptjs");
const sendEmail = require(
  "../utils/sendEmail"
);

// Register Admin User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({
      email,
    });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login Admin User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (
      user &&
      (await user.matchPassword(password))
    ) {
      return res.status(200).json({
        success: true,
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }

    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Logged-in User Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.user._id
    ).select("-password");

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Forgot Password
// exports.forgotPassword = async (
//   req,
//   res
// ) => {
//   try {
//     const { email } = req.body;

//     const user = await User.findOne({
//       email,
//     });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     const resetToken =
//       generateResetToken();

//     user.resetPasswordToken =
//       resetToken;

//     user.resetPasswordExpire =
//       Date.now() + 15 * 60 * 1000;

//     await user.save();

//     res.status(200).json({
//       success: true,
//       message:
//         "Reset token generated successfully",
//       resetToken,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



// Forgot Password
exports.forgotPassword = async (
  req,
  res
) => {
  try {
    console.log("FORGOT PASSWORD HIT");

    const { email } = req.body;

    console.log("EMAIL:", email);

    const user = await User.findOne({
      email,
    });

    console.log(
      "USER FOUND:",
      user ? "YES" : "NO"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const resetToken =
      generateResetToken();

    console.log(
      "TOKEN GENERATED:",
      resetToken
    );

    user.resetPasswordToken =
      resetToken;

    user.resetPasswordExpire =
      Date.now() + 15 * 60 * 1000;

    console.log(
      "BEFORE SAVE"
    );

    await user.save();

    console.log(
      "AFTER SAVE"
    );

    const resetLink =
`${process.env.CLIENT_URL}/reset-password/${resetToken}`;

await sendEmail(
  user.email,
  "Password Reset Request",
  `
    <h2>Karnani & Associates</h2>

    <p>
      Click the button below to reset
      your password:
    </p>

    <a
      href="${resetLink}"
      style="
      background:#1e3a8a;
      color:white;
      padding:12px 20px;
      text-decoration:none;
      border-radius:5px;"
    >
      Reset Password
    </a>

    <p>
      Link expires in 15 minutes.
    </p>
  `
);

res.status(200).json({
  success: true,
  message:
    "Password reset email sent",
});
  } catch (error) {
    console.log(
      "FORGOT PASSWORD ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};








// Reset Password
exports.resetPassword = async (
  req,
  res
) => {
  try {
    const { token } = req.params;

    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpire: {
        $gt: Date.now(),
      },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid or expired token",
      });
    }

    user.password = password;

    user.resetPasswordToken = null;

    user.resetPasswordExpire = null;

    await user.save();

    res.status(200).json({
      success: true,
      message:
        "Password reset successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};