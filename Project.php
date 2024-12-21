<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model {
    protected $table = 'Project';
    
    use HasFactory;

    protected $fillable = ['title', 'description', 'keywords', 'technologies', 'teacher_id'];

    public function teachers() {
        return $this->belongsTo(Teacher::class);
    }

    public function applications() {
        return $this->hasMany(Application::class);
    }

    public function groups() {
        return $this->belongsToMany(Group::class);
    }
}

