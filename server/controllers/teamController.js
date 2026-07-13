const Team = require("../models/Team");

// @desc Get all team members
// @route GET /api/team
// @access Public
exports.getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({
      createdAt: -1,
    });

    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// @desc Create team member
// @route POST /api/team
// @access Private
exports.createTeamMember = async (req, res) => {
  try {
    const { name, title, bio } = req.body;

    const photoUrl = req.file
      ? req.file.path
      : "";

    const member = await Team.create({
      name,
      title,
      bio,
      photoUrl,
    });

    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// @desc Get single member
// @route GET /api/team/:id
// @access Public
exports.getTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(
      req.params.id
    );

    if (!member) {
      return res.status(404).json({
        message: "Team member not found",
      });
    }

    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// @desc Update team member
// @route PUT /api/team/:id
// @access Private
exports.updateTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(
      req.params.id
    );

    if (!member) {
      return res.status(404).json({
        message: "Team member not found",
      });
    }

    const updateData = {
      name: req.body.name,
      title: req.body.title,
      bio: req.body.bio,
    };

    // Update photo only when a new image is selected
    if (req.file) {
      updateData.photoUrl = req.file.path;
    }

    const updatedMember =
      await Team.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      );

    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// @desc Delete team member
// @route DELETE /api/team/:id
// @access Private
exports.deleteTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(
      req.params.id
    );

    if (!member) {
      return res.status(404).json({
        message: "Team member not found",
      });
    }

    await member.deleteOne();

    res.status(200).json({
      message:
        "Team member deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};